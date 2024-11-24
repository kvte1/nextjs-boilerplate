
export async function getServerSideProps() {
  const utorid = '1007831287'; // Replace with your actual UTorID

  return {
    props: {
      utorid,
    },
  };
}
export default function AutoTesterPage({utorid}) {
  return (
    <div id="auto-tester">
      Hi. I am {utorid}, and I have learned how to develop a full-stack web app
      and deploy it!
    </div>
  );
}