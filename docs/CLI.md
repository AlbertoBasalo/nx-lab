# Nx Lab

> CLI commands and configuration

## Main application

```bash
# Create an empty repository [nx-lab]
npx create-nx-workspace@latest nx-lab --preset=empty

cd nx-lab

# Install Angular plugin
npm i -D @nx/angular

# Generate Main Application [activity-bookings] [lab]
npx nx g @nx/angular:app activity-bookings --bundler=esbuild --e2eTestRunner=none -p=lab -s -S --style=css --ssr --unitTestRunner=none -t --tags=type:app

```

## Core library

```bash
# Generate Core library
npx nx g @nx/angular:library core -c=OnPush --importPath=@lab/core -p=lab -s --skipTests --style=css --unitTestRunner=none -t --tags=type:feat,scope:core

# Generate Core components
npx nx g @nx/angular:component header --directory=core/src/lib --prefix=lab
npx nx g @nx/angular:component footer --directory=core/src/lib --prefix=lab
```

## Routed libraries

```bash
# Generate Routed libraries
# Home
npx nx g @nx/angular:library routes/home -c=OnPush --importPath=@lab/home --lazy=true -p=lab --projectNameAndRootFormat=as-provided --routing=true -s --skipTests --style=css --unitTestRunner=none -t --tags=type:feat,scope:home
# User
npx nx g @nx/angular:library routes/user -c=OnPush --importPath=@lab/user --lazy=true -p=lab --projectNameAndRootFormat=as-provided --routing=true -s --skipTests --style=css --unitTestRunner=none -t --tags=type:feat,scope:user
# Activities
npx nx g @nx/angular:library routes/activities -c=OnPush --importPath=@lab/activities --lazy=true -p=lab --projectNameAndRootFormat=as-provided --routing=true -s --skipTests --style=css --unitTestRunner=none -t --tags=type:feat,scope:activities
# Bookings
npx nx g @nx/angular:library routes/bookings -c=OnPush --importPath=@lab/bookings --lazy=true -p=lab --projectNameAndRootFormat=as-provided --routing=true -s --skipTests --style=css --unitTestRunner=none -t --tags=type:feat,scope:bookings
```

## Shared libraries

```bash
# Generate Shared libraries
# auth
npx nx g @nx/angular:library shared/auth -c=OnPush --importPath=@lab/auth -p=lab --projectNameAndRootFormat=as-provided -s --skipTests --style=css --unitTestRunner=none -t --tags=type:services,scope:shared
npx nx g @schematics/angular:service auth --project=auth --skipTests=true

# log
npx nx g @nx/angular:library shared/log --importPath=@lab/log -p=lab --projectNameAndRootFormat=as-provided -s --skipTests --style=css --unitTestRunner=none -t --tags=type:services,scope:shared
npx nx g @schematics/angular:service logger --project=log --skipTests=true

# ui
npx nx g @nx/angular:library shared/ui -c=OnPush --importPath=@lab/ui -p=lab --projectNameAndRootFormat=as-provided -s --skipTests --style=css --unitTestRunner=none -t --tags=type:ui,scope:shared
# services
npx nx g @nx/angular:library shared/services -c=OnPush --importPath=@lab/services -p=lab --projectNameAndRootFormat=as-provided -s --skipTests --style=css --unitTestRunner=none -t --tags=type:services,scope:shared
# domain
npx nx g @nx/js:lib shared/domain --bundler=esbuild --importPath=@lab/domain --projectNameAndRootFormat=as-provided --unitTestRunner=none --tags=type:domain,scope:shared
```

## Testing

```bash
# E2E testing with cypress for main applications
npx nx g @nx/cypress:configuration --bundler=vite --devServerTarget=activity-bookings:serve --project=activity-bookings

# Shared testing
# Component testing with cypress for  ui library
npx nx g @nx/angular:cypress-component-configuration --project=ui --buildTarget=activity-bookings:build:development --generateTests

# Unit testing with jest for domain and services libraries
npx nx g @nx/jest:configuration --project=domain
npx nx g @nx/jest:configuration --project=services


# Feat testing (core + routed) libs
# Can be jest(suggested), cypress-component, or none and go all-in with main e2e

```

## Module boundaries

EsLint JSON configuration

```json
{
		...
	  "rules": {
        "@nx/enforce-module-boundaries": [
          "error",
          {
            "enforceBuildableLibDependency": true,
            "allow": [],
            "depConstraints": [
              {
                "sourceTag": "scope:*",
                "onlyDependOnLibsWithTags": ["scope:shared"]
              },
              {
                "sourceTag": "type:app",
                "onlyDependOnLibsWithTags": ["type:feat"]
              },
              {
                "sourceTag": "type:feat",
                "onlyDependOnLibsWithTags": [
                  "type:service",
                  "type:ui",
                  "type:domain"
                ]
              },
              {
                "sourceTag": "type:service",
                "onlyDependOnLibsWithTags": ["type:domain"]
              },
              {
                "sourceTag": "type:ui",
                "onlyDependOnLibsWithTags": ["type:domain"]
              },
              {
                "sourceTag": "type:domain",
                "onlyDependOnLibsWithTags": ["type:domain"]
              }
            ]
          }
        ]
      }
}
```

## NPM Scripts

```json
"scripts": {
  "lint": "nx run-many --target=lint --all",
  "format": "nx run-many --target=format:write --all",
  "migrate": "nx migrate latest",
  "start": "nx serve activity-bookings",
  "test": "nx run-many --target=test --all",
  "test:e2e": "nx e2e activity-bookings",
  "watch": "nx e2e activity-bookings --headed --watch",
  "watch:domain": "nx test domain --watch",
  "watch:services": "nx test services",
  "watch:ui": "nx component-test ui --headed --watch"
},
```

## Extras

```bash
# Release
npm i -D standard-version
# "release": "standard-version && git push --follow-tags origin main"
```
