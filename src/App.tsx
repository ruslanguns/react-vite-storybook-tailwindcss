import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

function App() {
  return <AlertDemo />;
}

export function AlertDemo() {
  return (
    <div className="m-4">
      <Alert variant="informative" hasIcon={true}>
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
