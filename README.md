# vue-hyperscript-terse

Enhance Vue's built in 'createElement' or 'h' function with automatic detection of ids and classes. Defaults to div when the element name is not provided.

```js
{
  render: (h, ctx) => {
    return h('#root.wrapper', [
      h('.mobile', 'Test'),
      h('table.fullwidth.hero', [
        h('tr', [
          h('td.number', '0.123'),
          h('td', 'Bob')
        ])
      ])
    ])
  }
}

// is equivalent to:

{
  render: (h, ctx) => {
    return h('div', { attrs: { id: 'root' }, class: { wrapper: true } }, [
      h('div', { class: { mobile: true } }, 'Test'),
      h('table', { class: { fullwidth: true, hero: true } } [
        h('tr', [
          h('td', { class: { number: true } }, '0.123'),
          h('td', 'Bob')
        ])
      ])
    ])
  }
}
```
