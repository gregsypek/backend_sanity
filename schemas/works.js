export default {
	name: "works",
	title: "Works",
	type: "document",
	fields: [
		{
			name: "id",
			title: "Id",
			type: "string",
		},
		{
			name: "title",
			title: "Title",
			type: "string",
		},

		{
			name: "description",
			title: "Description",
			type: "string",
		},
		{
			name: "projectLink",
			title: "Project Link",
			type: "string",
		},
		{
			name: "codeLink",
			title: "Code Link",
			type: "string",
		},
		{
			name: "imgUrls",
			title: "ImageUrls",
			type: "array",
			of: [
				{
					type: "image",
					options: {
						hotspot: true,
					},
				},
			],
		},

		{
			name: "tags",
			title: "Tags",
			type: "array",
			of: [
				{
					name: "tag",
					title: "Tag",
					type: "string",
				},
			],
		},
	],
};
