import Component1 from "./components/component1";
import ContextForm from "./components/contextForm";
import ContextExampleProvider from "./components/contextProvider";

function ContextExample() {
  return (
    <>
      <ContextExampleProvider>
        <div>
          <ContextForm />
          <Component1 />
        </div>
      </ContextExampleProvider>
    </>
  );
}
export default ContextExample;
