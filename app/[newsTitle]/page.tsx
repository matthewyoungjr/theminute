type Props = {
  searchParams: {
    q: string;
  };
};

const ContentPage = ({ searchParams: { q } }: Props) => {
  return (
    <>
      <h1>{q}</h1>
    </>
  );
};

export default ContentPage;
