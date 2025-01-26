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

  console.log(news);

  return (
    <Content>
      <div className="flex flex-col mt-[304px]">
        {/* Punkt und Seitentitel */}
        <div className="flex items-center mb-1">
          <span className="w-2 h-2 rounded-full bg-[#D0312D] ml-2 mr-1"></span>
          <h1 className="text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] xl:text-[16px] leading-[1.1] font-['Montserrat',_sans-serif] uppercase text-left">
            News
          </h1>
        </div>

        {/* Hauptüberschrift - jetzt links ausgerichtet */}
        <Title withDot>Impulse für die Zukunft</Title>
      </div>

      <div className="mt-32">
        {news.map((article, index) => {
          return (
            <article key={article.id} className={index !== 0 ? 'mt-20' : ''}>
              <div className="flex justify-between">
                <Subtitle withDot>{article.title}</Subtitle>
                <div>
                  (
                  {new Date(article.publishedDate).toLocaleString('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                  )
                </div>
              </div>
              <div className="flex items-center overflow-hidden">
                {article.featuredImage && (
                  <div className="basis-3/4">
                    <img
                      className="object-cover w-full h-64 rounded-lg"
                      src={article.featuredImage.url}
                      alt={article.featuredImage.alt}
                    />
                  </div>
                )}
                <div className="p-8 leading-normal">
                  <RegularText>
                    Lorem ipsum dolor sit amet, consetetur sad ipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  </RegularText>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Content>
  );
}
