import { Content } from '../../../components/Content';
import { getPayload } from '@/client/payload';
import { RegularText } from '@/components/RegularText';
import { Subtitle } from '@/components/Subtitle';
import { Title } from '@/components/Title';

export const dynamic = 'force-dynamic';
export const revalidate = 300;

export default async function Aktuelles() {
  const payload = await getPayload();
  const { docs: news } = await payload.find({
    collection: 'news',
    depth: 1,
  });

  const layouts = {
    squareTextRight: {
      grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      image: 'md:col-span-1 aspect-square w-full rounded-2xl',
      text: 'md:col-span-2',
    },
    mediumSquareTextBelow: {
      grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      image: 'md:col-span-3 aspect-[3/2] w-full rounded-2xl',
      text: 'col-span-1 md:col-span-3',
    },
    fullSquareTextBelow: {
      grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      image: 'md:col-span-3 aspect-square w-full rounded-2xl',
      text: 'col-span-1 md:col-span-3',
    },
    portraitImageTextRight: {
      grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      image: 'md:col-span-1 aspect-[2/3] w-full rounded-2xl',
      text: 'md:col-span-2',
    },
    landscapeLargeImageTextBelow: {
      grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      image: 'col-span-1 md:col-span-3 aspect-[2/1] w-full rounded-2xl',
      text: 'col-span-1 md:col-span-3',
    },
    landscapeImageTextBelow: {
      grid: 'grid grid-cols-1 md:grid-cols-3 gap-6',
      image: 'md:col-span-3 aspect-[3/1] w-full rounded-2xl',
      text: 'col-span-1 md:col-span-3',
    },
  };

  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">News</h1>
        </div>
        <Title withDot>Impulse für die Zukunft</Title>
      </div>

      <div className="mt-32">
        {news.map((article, index) => {
          const layout = layouts[article.layout || 'mediumSquareTextBelow'];

          return (
            <article key={article.id} className={index !== 0 ? 'mt-20' : ''}>
              <div className="flex justify-between items-start">
                <Subtitle withDot withLeadingSlash>
                  {article.title}
                </Subtitle>
                <span className="font-['IBM_Plex_Mono'] text-sm">
                  (
                  {`${new Date(article.publishedDate).toLocaleDateString('de-DE', {
                    month: 'long',
                  })}, ${new Date(article.publishedDate).getFullYear()}`}
                  )
                </span>
              </div>

              <div className={layout.grid}>
                {article.featuredImage && (
                  <div className={`overflow-hidden ${layout.image}`}>
                    <img
                      className={`object-cover w-full h-full transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-105`}
                      src={article.featuredImage.url}
                      alt={article.featuredImage.alt}
                    />
                  </div>
                )}
                <div className={layout.text}>
                  <RegularText>{article.content}</RegularText>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Content>
  );
}
