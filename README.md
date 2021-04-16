A version of the Gilded Rose kata in JavaScript with approval testing.

## See also

About the Gilded Rose kata:
- <https://iamnotmyself.com/2011/02/14/refactor-this-the-gilded-rose-kata/>
- <https://github.com/NotMyself/GildedRose>
- <https://github.com/emilybache/GildedRose-Refactoring-Kata>

About approval tests:
- <https://approvaltests.com/>

Videos demonstrating or about the kata:
- <https://www.youtube.com/watch?v=q11gydDAMSo>
- <https://www.youtube.com/watch?v=1bJzZvGLVzc>

About type checking JavaScript files:

- <https://github.com/microsoft/TypeScript/wiki/Type-Checking-JavaScript-Files>
- <https://github.com/microsoft/TypeScript/wiki/Architectural-Overview>
- <https://www.typescriptlang.org/docs/handbook/jsdoc-supported-types.html>

## Type checking learnings

- Only files marked by `@ts-check` are checked (can be configured, a black list
  is also possible)
- Type errors are displayed on the fly in IDEs (tested on Vim + ALE)
- Type checking can be run in watch mode
- Type checking can be run in the CI environment
- No runtime cost: type annotations are in comments
- No additional build phase, no additional deployment phase
- Function arity of `@param` annotated functions is checked
- There is a type inference mecanism, no need to annotate everything
- `@private` and `@readonly` annotation for class fields
- Union Types
- Parametric Types
- Allows "rename method" and "rename field" automated refactorings, maybe more
  ?
- Types used only in comment annotations can (should?) be declared only in
  comment annotations
- We can declare and implement typechecked interfaces (`@interface` and
  `@implements`)
