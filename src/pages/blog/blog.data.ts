export const facebookUrl =
  'https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FSACTtranlation%2F&tabs=timeline&width=340&height=380&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=365036103630036';

export interface IblogData {
  id: number;
  title: string;
  routeName: string;
  description: string;
  imgPath: string;
  date: string;
}

export const blogData = [
  {
    id: 1,
    title: 'articelTitle1',
    description: 'articelDescription1',
    imgPath:
      'https://sact.co/blog_pics/translating-video-based-online-course-infographic.jpg',
    date: 'articelDate1',
  },
  {
    id: 2,
    title: 'articelTitle2',
    description: 'articelDescription2',
    imgPath: 'https://sact.co/blog_pics/Google-translate.png',
    date: 'articelDate2',
  },
  {
    id: 3,
    title: 'articelTitle3',
    description: 'articelDescription3',
    imgPath: 'https://sact.co/blog_pics/1056204271.jpg',
    date: 'articelDate3',
  },
];
