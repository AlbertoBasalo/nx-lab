### Optimizing the Architecture of Large Web Applications with Angular

> Optimizing monolithic projects with libraries.

In the exciting world of web development with Angular, we face challenges when dealing with growing monolithic projects. This article explores three common problems and presents a reasonable solution to enhance efficiency and flexibility in developing large-scale web applications.

![img](https://cdn-images-1.medium.com/max/1000/1*z4P2LfHRsl5344saIguI9g.jpeg)“Angular has been a renaissance to continue building large web applications.”

### Challenges of Monolithic Projects

#### - Compilation Time and Testing Cycle:

As code grows within a single project, we encounter an increase in compilation time and a slowdown in the testing cycle. This can negatively impact **productivity** and the responsiveness of the development team, potentially leading to the abandonment of test adoption during development.

#### - Module-less Architecture:

The new module-less architecture in recent versions of Angular greatly facilitates development and lowers the entry barrier for new programmers. However, removing the boundaries modules provide can create **chaos** where any artifact is visible throughout the application. This allows for complicated dependencies and hinders the implementation of robust software architectures.

### The Solution: Specialized Libraries with Angular

The proposed solution to overcome these challenges is based on the creation of specialized libraries, replacing the role of traditional modules with greater flexibility and efficiency.

#### + Test-Driven or Test-Backed Development:

Each library can be compiled and tested independently, even with specific tools based on its content and technological foundation. This facilitates development and speeds up feedback cycles.

#### + Abstraction and Hiding Details:

Each library exposes functionalities while hiding implementation details. This well-established, widely tested best practice simplifies refactoring and aids in issue detection.

#### + Dependency Rules:

Dependency rules can be established between libraries, allowing the creation of hierarchies in line with common software architectures, such as *layered* or *clean architecture*.

#### + Future-Ready:

The proposed structure facilitates adaptation to ***Micro-front-end\*** architectures and coexistence with other technologies or Angular versions in the long term.

### Recommended Tools: Nx.dev

You can use standard Angular tools and plugins for es-lint to implement this architecture, such as [Sheriff](https://github.com/softarc-consulting/sheriff).

However, currently, I recommend using tools from [Nx.dev](http://nx.dev/), which significantly enhance the developer experience.

#### Practical Example: GitHub Lab

You can explore a practical example in my GitHub lab: [Nx Lab Repository](https://github.com/AlbertoBasalo/nx-lab). The repository details the [Nx commands used](https://github.com/AlbertoBasalo/nx-lab/blob/main/docs/CLI.md) for workspace generation and all libraries.

This is the result in the VSCode of the example’s multi-project mono-repository.

![img](https://cdn-images-1.medium.com/max/1000/0*XicMtiK2dl3sOetx)Repository folder tree.

#### Recommended Structure and Dependency Boundaries

I have based the proposed folder structure on the one presented in my previous article for medium-sized applications: 

[**File and folder structure for Angular applications**
*Having a good scaffolding is the foundation for successful development. Here are some guidelines for naming and…*albertobasalo.medium.com](https://albertobasalo.medium.com/file-and-folder-structure-for-angular-applications-3130efc582e3)

At the eslint file, pay special attention to the section where [**project dependency limits**](https://github.com/AlbertoBasalo/nx-lab/blob/main/docs/CLI.md#module-boundaries) are set, facilitated by Nx tools.

![img](https://cdn-images-1.medium.com/max/1000/0*cUM-i7S0f-E06Mm-)Diagram differentiating between monolithic vs modular architecture.

### Granularity of Libraries

When creating libraries, granularity is critical. You can start with three large libraries: **core, routes, and shared**, but it is advisable to further divide them according to project needs.

#### Library per Main Route:

Having at least one library for each main route is recommended to facilitate management and maintenance. You can continue slicing and creating specialized libraries for each page from here.

You can even treat each functional route as a mini-application with its specialized *UI, Domain, and Data service* libraries.

#### Shared Container Division:

What I do recommend is at least subdividing the shared container. First, extract features like *logging or security*, following the principle of maintaining cohesive and potentially reusable solutions.

### Technical Division and Specialized Testing

Until now, I have encouraged division, or grouping, if you prefer to see it positively, by functionality. This is commonly referred to as *vertical slicing*. But there is also the possibility of physically reflecting the technical division in libraries, *horizontal layering*.

Both can be represented in a table like this simplified example, highlighting the direction of allowed and restricted dependencies at the [eslint rules level](https://github.com/AlbertoBasalo/nx-lab/blob/main/docs/CLI.md#module-boundaries).

![img](https://cdn-images-1.medium.com/max/1000/0*L9DikZ-xaxKLE-QX)Horizontal (technical type) and vertical (functional scope) division.

Technical divisions are interesting as they allow the use of more specific tools, especially in the **testing** domain. For example, some libraries can focus on components, while others have no relationship with the framework.

#### Visual Testing with Cypress:

Libraries specialized in the presentation layer expose Angular components. Testing the UI in a traditional unitary way can be a pain.

But for some time now, they can be visually and user-friendly tested with Cypress. With the advent of [component testing](https://docs.cypress.io/guides/component-testing/angular/overview), they have provided an efficient and, above all, enjoyable development experience.

#### Pure Libraries for Data and Business Logic:

Extracting data definitions and business logic to pure libraries, without contamination from any *framework*, allows the use of standard unit testing tools and is potentially reusable between technologies.

And, of course, they are the core of clean architecture, in case you opt for that. In my experience, most front-end developments don’t take it to the extreme due to the complexity of abstraction and dependency inversion they require.

But, at least, this view of the domain as something independent of the framework, even if only for *DTOs, entities, or functions*, is extremely useful as a mental framework.

### Validation in Large-Scale Projects

In my experience as a trainer and consultant, I have seen that this solution has been tested in developing projects for large companies.

It demonstrates effective scalability for any size or desired architecture, including **Micro-front-end and clean architectures**.

At the same time, it retains simple concepts of smaller applications: **core, routed, and shared.**

I hope these ideas contribute to the clarity and effectiveness of your developments. Please let me know if there’s anything else I can help with or correct!

Health and good luck.

[**Alberto Basalo.**](https://albertobasalo.dev/)

*Elevating code quality.*
