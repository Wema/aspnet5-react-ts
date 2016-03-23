/// <reference path="../typings/tsd.d.ts" />
import * as React from 'react';

export class HelloWorld extends React.Component<any, any> {
   render() {
      return <h1>Hello from {this.props.phrase}!</h1>;
   }
}


 