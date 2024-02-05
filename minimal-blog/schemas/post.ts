export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'thumbnail',
      type: 'image',
      title: 'Thumbnail',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'overview',
      type: 'string',
      title: 'Overview',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
        {
          type: 'code',
          name: 'codeBlock',
          title: 'Code Block',
        },
      ],
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      description: 'Choose a category for the post (e.g., Front-end, etc.)',
      options: {
        list: ['Front-end', 'UX/UI', 'Job Search', 'Featured'],
      },
    },
    {
      name: 'readingTime',
      type: 'number',
      title: 'Reading Time',
      description: 'Enter the estimated reading time in minutes',
    },
  ],
}
