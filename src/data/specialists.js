import { v4 as uuidv4 } from 'uuid';

const specialists = [
  {
    id: uuidv4(),
    name: 'Alicja Kwiatkowska',
    branch: ' [Reklama]',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magni adipisci animi, nobis quam commodi ' +
      'facilis ullam optio quos excepturi ipsa perspiciatis eligendi provident non libero?',
  },
  {
    id: uuidv4(),
    name: 'Marek Poniatowski',
    branch: ' [IT]',
    description:
      'Quisque ut lacus non odio placerat consectetur. Cras eget laoreet diam. Aenean ultrices mollis tempus. ' +
      'Aenean at risus sodales, molestie odio sit amet, vehicula nisl. Sed luctus erat leo, ac aliquet ligula facilisis et.',
  },
  {
    id: uuidv4(),
    name: 'Justyna Porębska',
    branch: ' [Zakupy]',
    description:
      'Nam lorem erat, laoreet vitae metus id, semper semper massa. Nunc nec magna ultricies, ullamcorper sem sit amet, ' +
      'congue sapien. Nulla scelerisque eros at augue mattis sollicitudin',
  },
  {
    id: uuidv4(),
    name: 'Juliusz Sobierajski',
    branch: ' [Inwestycje]',
    description:
      'Phasellus pharetra lorem bibendum hendrerit fermentum. Duis efficitur et dui ac maximus. Maecenas malesuada ' +
      'enim eu porta suscipit. Phasellus eget ornare nulla.',
  },
];

export default specialists;
