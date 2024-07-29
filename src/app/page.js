import Head from 'next/head';
import OutlinedCard from '@/Components/Card';
import MainCard from '@/Components/MainCard'; // Import the MainCard component
import Example from '@/Components/Header';

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: 'url("https://watermark.lovepik.com/photo/40172/9456.jpg_wh1200.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Head>
        <title>Home Page</title>
      </Head>
      <Example />
      <div className="p-6">
        {/* Container for cards */}
        <div className="flex justify-center my-6 py-6">
          <MainCard
            heading="Main Feature"
            content="Discover our main feature with extensive details and benefits. This card provides an overview of our flagship offering. Discover our main feature with extensive details and benefits. This card provides an overview of our flagship offering."
            buttonName="EXPLORE MORE"
            sx={{ maxWidth: 600, minHeight: 400 }} // Adjust the size here
          />
        </div>
        <div className="flex justify-center overflow-x-auto space-x-6 mt-6 py-6">
          <OutlinedCard
            heading="Design Challenge"
            content="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
            buttonName="LEARN MORE"
          />
          <OutlinedCard
            heading="Development Challenge"
            content="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos."
            buttonName="DISCOVER"
          />
          <OutlinedCard
            heading="Marketing Challenge"
            content="Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?"
            buttonName="GET STARTED"
          />
          <OutlinedCard
            heading="UX Challenge"
            content="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat."
            buttonName="EXPLORE"
          />
        </div>
      </div>
    </div>
  );
}
