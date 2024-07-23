export const toTasksView = (section_1) => `/${section_1}`
export const toAuthorView = (section_2) => `/${section_2}`
export const toSingleTaskView = (section_1, {id} = {id: ":id"}) => `/${section_1}/${id}`