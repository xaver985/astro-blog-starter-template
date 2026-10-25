import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** All posts, newest first. */
export async function getPosts(): Promise<Post[]> {
	const posts = await getCollection('blog');
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/**
 * Rough reading time in minutes. English is counted by words (about 220 per
 * minute) and Chinese by characters (about 400 per minute).
 */
export function readingTime(markdown: string | undefined): number {
	if (!markdown) return 1;
	const text = markdown
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		.replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]+>/g, ' ');
	const cjk = (text.match(/[㐀-鿿豈-﫿]/g) || []).length;
	const words = (text.replace(/[㐀-鿿豈-﫿]/g, ' ').match(/[A-Za-z0-9'’-]+/g) || [])
		.length;
	return Math.max(1, Math.round(words / 220 + cjk / 400));
}
