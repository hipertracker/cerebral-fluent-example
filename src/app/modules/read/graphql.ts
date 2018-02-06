export const initData = `
  {
    languages {
      name
      label
    }
    books {
      name
      label {
        en {
          name
          label
        }
        pl {
          name
          label
        }
      }
    }
    bibles {
      name
      label
      year
      strong
      tags
      language {
        name
      }
      books {
        name
      }
    }
  }
`;
