export default {
  name: 'featured',
  title: 'Featured',
  type: 'document',

  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'array',
      of: [{type: 'image'}], //array of images
      options: {
        hotspot: true,
      },
    },

    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },

    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name', //automatic generate a unique slug based on the name
        maxlength: 90,
      },
    },

    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },

    {
      name: 'details',
      title: 'Details',
      type: 'string',
    },
  ],
}
