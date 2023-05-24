
## Setting Up a Project

Install the Angular CLI globally:

```
npm install -g @angular/cli
```

Create workspace:
Run `ng serve` to serve the project. You can visit the dev site in this link `http://localhost:4200`.

```
ng new [PROJECT NAME]
```

Run the application:

```
cd [PROJECT NAME]
ng serve
```

Build the application:
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

```
cd [PROJECT NAME]
ng build
```

Unit Test the application:
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

```
cd [PROJECT NAME]
ng test
```

e2e Test the application:
Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

```
cd [PROJECT NAME]
ng e2e
```

Angular is cross-platform, fast, scalable, has incredible tooling, and is loved by millions.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. You can use `--spac false` to omit the testing part.

```
cd [PROJECT NAME]
ng generate component component-name
```

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
