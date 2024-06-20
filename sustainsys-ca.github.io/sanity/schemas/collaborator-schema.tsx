const collaborator = {
  name: "collaborator",
  title: "collaborators",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ]
    },
    {
      name: "university",
      title: "University",
      type: "string"
    },
    {
      name: "linkedin",
      title: "Linkedin",
      type: "url"
    },
  ]
}

export default collaborator;