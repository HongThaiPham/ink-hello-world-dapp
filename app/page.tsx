import HelloWorldState from "@/components/HelloWorldState";
import HelloWorldStateForm from "@/components/HelloWorldStateForm";

export default function Home() {
  return (
    <div className="space-y-5">
      <HelloWorldState />
      <HelloWorldStateForm />
    </div>
  );
}
