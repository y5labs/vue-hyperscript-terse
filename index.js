const classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/
const notClassId = /^\.|#/

module.exports = (h) => (element, data, children) => {
  if (element == null)
    return h('div', data, children)
  if (typeof(element) != 'string')
    return h(element, data, children)
  if (data == null || typeof(data) != 'object' || Array.isArray(data)) {
    children = data
    data = {}
  }

  const parts = element.split(classIdSplit)
  for (let part of parts) {
    const type = part.charAt(0)
    const value = part.substring(1, part.length)

    if (type === '.') {
      if (!data.class) data.class = {}
      data.class[value] = true
    }
    else if (type === '#' && !data.hasOwnProperty('id')) {
      if (!data.attrs) data.attrs = {}
      data.attrs.id = value
    }
  }

  // default to div
  const tag = notClassId.test(parts[1])
    ? 'div'
    : parts[1]
  return h(tag, data, children)
}
