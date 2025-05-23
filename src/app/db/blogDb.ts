import { BlogDto } from './blogDto';

const blogItems: BlogDto[] = [
  {
    id: 1,
    title: 'What is Lorem Ipsum?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    liked: false,
  },
  {
    id: 2,
    title: 'Why do we use it?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
    liked: false,
  },
  {
    id: 3,
    title: 'Where does it come from?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    liked: false,
  },
  {
    id: 4,
    title: 'Where can I get some?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    liked: false,
  },
  {
    id: 5,
    title: 'What is Lorem Ipsum?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    liked: false,
  },
  {
    id: 6,
    title: 'What is Lorem Ipsum?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    liked: false,
  },
  {
    id: 7,
    title: 'What is Lorem Ipsum?',
    author: 'morteza',
    brief:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    liked: false,
  },
];

export function getAllBlogs(): BlogDto[] {
  return blogItems;
}

export function getBlogById(id: number): BlogDto | undefined {
  return blogItems.find((p) => p.id == id);
}

export function addNewBlog(blog: BlogDto) {
  let newItem: BlogDto = { ...blog };
  newItem.id = blogItems.length + 1;
  blogItems.push(newItem);
}
