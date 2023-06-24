import { ISideBarData } from '@~types/flowBuilder'

export const dataSidebar: ISideBarData[] = [
  {
    key: 1,
    label: 'FrontEnd',
    items: [
      {
        content: 'ReactJs',
        title: 'React',
        color: 'cyan',
        type: 'output',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 200,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 10,
            },
          ],
        },
      },
      {
        content: 'Angular',
        title: 'Angular',
        color: 'cyan',
        type: 'output',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 200,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 10,
            },
          ],
        },
      },
      {
        content: 'VueJs',
        title: 'Vue',
        color: 'cyan',
        type: 'output',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 100,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 30,
            },
          ],
        },
      },
    ],
  },
  {
    key: 2,
    label: 'API',
    items: [
      {
        content: 'API Gateway',
        title: 'API Gateway',
        color: 'cerise',
        type: 'default',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 200,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 10,
            },
          ],
        },
      },
      {
        content: 'REST',
        title: 'REST',
        color: 'cerise',
        type: 'default',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 200,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 10,
            },
          ],
        },
      },
    ],
  },
  {
    key: 3,
    label: 'Backend',
    items: [
      {
        content: 'Java',
        title: 'Backend',
        color: 'orange',
        type: 'customNode',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 50,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 80,
            },
          ],
        },
      },
      {
        content: 'Python',
        title: 'Backend',
        color: 'orange',
        type: 'customNode',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 50,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 80,
            },
          ],
        },
      },
      {
        content: 'C#/.NET',
        title: 'Backend',
        color: 'orange',
        type: 'customNode',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 50,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 80,
            },
          ],
        },
      },
    ],
  },
  {
    key: 4,
    label: 'Database',
    items: [
      {
        content: 'MongoDB',
        title: 'Database',
        color: 'green',
        type: 'customNode',
        data: {
          target: 50,
          potentialTarget: 50,
          percentOK: {
            value: 10,
          },
          analytics: [
            {
              label: 'Accepted',
              color: '#003f5c',
              value: 200,
            },
            {
              label: 'Refused',
              color: '#d45087',
              value: 10,
            },
          ],
        },
      },
    ],
  },
]
