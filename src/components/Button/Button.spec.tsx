import { act, cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from '.';

let container: HTMLDivElement | null = null;

describe("Button component", () => { // similar to: [TestClass]; describes a suite of tests
  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);

  });

  afterEach(() => {
    cleanup();
  });

  it("should contain title prop", () => {

    act(() => {
      const { getByText } = render(<Button title="Button" />);
      expect(getByText('Button')).toBeInTheDocument();
    })

    act(() => {
      const { getByText } = render(<Button title="Another Button" />);
      expect(getByText('Another Button')).toBeInTheDocument();
    })

    act(() => {
      const { getByText } = render(<Button title="Click me!" />);
      expect(getByText('Click me!')).toBeInTheDocument();
    })

  });

  it("should trigger an event click", () => {
    let value: string | null = null;
    const handleClick = () => value = 'clicked';

    act(() => {
      const { getByText } = render(<Button title="Button" onClick={handleClick} />);
      fireEvent(
        getByText('Button'),
        new MouseEvent('click', {
          bubbles: true
        })
      );

      expect(value).toEqual('clicked');
    })
  })

  it("should not trigger an event click when is disabled", () => {
    let value: string | null = null;
    const handleDisabledClick = () => value = 'disabled';

    act(() => {
      const { getByText } = render(<Button title="Button" onClick={handleDisabledClick} disabled />);
      fireEvent(getByText('Button'), new MouseEvent('click'));

      expect(value).not.toEqual('disabled');
    })
  });
});