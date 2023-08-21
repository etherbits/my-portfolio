import OutlinedText from "@/app/components/OutlineText";

const journeys = [
  { id: "journey_start", date: "2017" },
  { id: "journey_web_focus", date: "2019" },
  { id: "journey_end", date: "2021" },
];

export default function Journey() {
  return (
    <div className="flex w-full flex-col items-center">
      <OutlinedText>Journey</OutlinedText>
      <main>
        <ul>
          {journeys.map((journey) => {
            return <li key={journey.id}>{journey.id}</li>;
          })}
        </ul>
      </main>
    </div>
  );
}
