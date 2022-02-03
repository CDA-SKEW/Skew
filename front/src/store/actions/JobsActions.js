/*
 * Import - Module
 * *************** */
// import axios from "axios";

import { GET_LIST_JOBS } from "./ActionTypes";

/*
 * Import types { ... }
 * ******************** */

/*
 * Actions
 * ******* */

// GET Api ListJobs
export const getListJobs = () => {
  const listJobs = [
    {
      id: 1,
      avatar:
        "https://img.search.brave.com/YAChonmMV6YUIBHQOKsUE6JGVUHhfgyC1wKEpiygEdk/rs:fit:736:1200:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vNzM2/eC81Yi84NC9iNC81/Yjg0YjQyMmY5OTdl/OGZiNzVmZDdiZWI5/MTY5ZTYwMy5qcGc",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "CDI",
      isChecked: 0,
    },
    {
      id: 2,
      avatar:
        "https://www.tailslife.com/blog/wp-content/uploads/2018/04/adorable-animal-animal-photography-1022158.jpg",
      job_number: 123456,
      name: "Tech",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "CDD/CDI",
      isChecked: 1,
    },
    {
      id: 3,
      avatar:
        "https://img.search.brave.com/GAJ6GzxYthkkC_CMna9L4DxVJrUYvg2AsTA5ikrHWR0/rs:fit:1136:640:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4L2M5/LzIxLzM4YzkyMTNi/YTUzOWE0NjFlZGRi/YzljYzRhNDllYmZh/LnBuZw",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "CDI",
      isChecked: 0,
    },
    {
      id: 4,
      avatar:
        "https://img.search.brave.com/ZEeJZMmnd-U68c99O10N7wtRwlALIZMj3MwjZKWpOeY/rs:fit:1200:720:1/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzYzLzQ2/LzlmLzYzNDY5Zjlh/YTdmN2RmMWNlMzQ4/YmQ2NDc4Nzk2OGUx/LmpwZw",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "freelance",
      isChecked: 1,
    },
    {
      id: 5,
      avatar:
        "https://img.search.brave.com/NbuxLwX2_38WJd3uh41_KouHvmJp4fj9Hh7knRwsJK4/rs:fit:400:400:1/g:ce/aHR0cHM6Ly90aWVy/bWFrZXIuY29tL2lt/YWdlcy9hdmF0YXJz/L2Nvbm5pZXoyNTU2/MTYyMS9jb25uaWV6/MjU1NjE2MjEuanBn",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "CDD",
      isChecked: 1,
    },
    {
      id: 6,
      avatar:
        "https://img.search.brave.com/r0gC5aKGJwb4lUh-TCjwuKWJkxJz_5vg74ChwSgwnoo/rs:fit:1200:630:1/g:ce/aHR0cHM6Ly9leHRl/cm5hbC1wcmV2aWV3/LnJlZGQuaXQvdUh6/cE00cUhYLWR0ejd0/YjRxNW1IRDRsTkJO/YzlVZnRXS19STmtq/NzNzQS5qcGc_YXV0/bz13ZWJwJnM9NWQ5/ZjdjMzUzNzg0NDQw/YjJjNGFkYjNhNWVi/YWE3OTAzNjI5MDFi/YQ",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "freelance",
      isChecked: 0,
    },
    {
      id: 7,
      avatar: "",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "contrat pro",
      isChecked: 0,
    },
    {
      id: 8,
      avatar:
        "https://img.search.brave.com/DBocuQMRvKkBYqT4Xj9Ly1iAW0R50YSovjzxArwt5IE/rs:fit:916:692:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2Fnd2Fsa2lu/Z3dlYi5jb20vbWVk/aWEvZGFpbHlfd2Fn/L2Jsb2dfYXJ0aWNs/ZXMvaGVyby8xNjA5/ODAxNDE3LjUyNTQw/Njgvc2NyZWVuLXNo/b3QtMjAyMS0wMS0w/NC1hdC0zMDMxNC1w/bS5wbmc",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "stage",
      isChecked: 1,
    },
    {
      id: 9,
      avatar:
        "https://img.search.brave.com/9XtR4b7OCYfsbrR3YiAqoWwes-5L0ifcMD8I_4CplBU/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9ibG9n/cy5jb2x1bWJpYW4u/Y29tL2NhdC10YWxl/cy93cC1jb250ZW50/L3VwbG9hZHMvc2l0/ZXMvNDMvMjAxNy8w/OS9TYXd5ZXJfRFNf/MTQwMi5qcGc",
      job_number: 123456,
      name: "Dev Cool",
      content: "esfeklfsolgodsjgqogvodsqfoejcvfolsdef",
      contract: "CDD",
      isChecked: 0,
    },
  ];
  return (dispatch) => {
    console.log("get:admin List jobs");
    dispatch({ type: GET_LIST_JOBS, payload: listJobs });
  };
};
