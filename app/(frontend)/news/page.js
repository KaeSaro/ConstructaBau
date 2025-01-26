import { Content } from '../../../components/Content';
import { getPayload } from '@/client/payload';
import { RegularText } from '@/components/RegularText';
import { Title } from '@/components/Title';
import { RichText } from '@payloadcms/richtext-lexical/react';

// const jsxConverters = ({ defaultConverters }) => ({
//   ...defaultConverters,
//   blocks: {
//     // myTextBlock is the slug of the block
//     myTextBlock: ({ node }) => <div style={{ backgroundColor: 'red' }}>{node.fields.text}</div>,
//   },
// })

export default async function Aktuelles() {
  const payload = await getPayload();
  const { docs: news } = await payload.find({
    collection: 'news',
    depth: 1,
  });

  console.log(news);

  return (
    <Content>
      {news.map(async (article) => {
        return (
          <article key={article.id} className="mb-8">
            <Title withDot>{article.title}</Title>
            <RegularText>{article.content}</RegularText>
            {article.featuredImage && (
              <img src={article.featuredImage.url} alt={article.featuredImage.alt} className="mt-4 max-w-full h-auto" />
            )}
          </article>
        );
      })}
    </Content>
  );
}
