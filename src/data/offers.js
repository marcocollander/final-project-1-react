import { v4 as uuidv4 } from 'uuid';

const offers = [
  { id: uuidv4(), service: 'Usługa 1', isNovelty: true },
  {
    id: uuidv4(),
    service: 'Usługa 2',
    isNovelty: false,
  },
  { id: uuidv4(), service: 'Usługa 3', isNovelty: false },
  {
    id: uuidv4(),
    service: 'Usługa 4',
    isNovelty: false,
  },
  { id: uuidv4(), service: 'Usługa 5', isNovelty: false },
  { id: uuidv4(), service: 'Usługa 6', isNovelty: false },
];

export default offers;
