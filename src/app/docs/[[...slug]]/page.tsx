export default async function docsHome({
  params,
}: {
  params: Promise<{ slug: string[] }>; // slug which is an array of strings 
}) {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        viewing docs for feature {slug[0]} and concept {slug[1]}{" "}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>viewing docs for feature {slug[0]} </h1>;
  } else if (slug?.length === 3) {
    return <h1>viewing docs for feature {slug[0]} and concept {slug[1]}{" "} and example {slug [3]}</h1>;
  }

  return <div>hello docs home</div>;
}
