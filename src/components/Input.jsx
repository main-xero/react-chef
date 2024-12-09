export default function Input() {
  function handleClickingNoise() {
    console.log("clicking noise detected");
  }

  return (
    <main>
      <p className="blurb">
        Add ingredients that you have available to cook with. And Spicy Chef
        will suggest what you can make!
      </p>
      <form className="ingredient-form" action="">
        <input
          type="text"
          placeholder="e.g. vanilla"
          aria-label="Add ingredient"
        />
        <button onClick={handleClickingNoise}>Add ingredient</button>
      </form>
    </main>
  );
}
