open Company;

open Employee;

type action =
  | CompaniesLoaded(list(company))
  | EmployeesLoaded(list(employee), string)
  | SearchResultsLoaded(list(string))
  | QueryUpdated(string);

type componentState = {
  companies: list(company),
  employees: list(employee),
  selectedCompany: string,
  query: string,
  results: list(string)
};

let component = ReasonReact.reducerComponent("App");

let selectCompany = (reduce, companyName: string) => {
  Js.log(companyName);
  CompanyService.fetchEmployees(companyName)
  |> Js.Promise.then_(
       (employees) => {
         reduce((_) => EmployeesLoaded(employees, companyName), ());
         Js.Promise.resolve()
       }
     )
  |> ignore
};

let loadCompanies = (reduce) =>
  CompanyService.fetchCompanies()
  |> Js.Promise.then_(
       (companies) => {
         reduce((_) => CompaniesLoaded(companies), ());
         Js.Promise.resolve()
       }
     )
  |> ignore;

let updateQuery = (reduce, query) => reduce((_) => QueryUpdated(query), ());

let executeQuery = (reduce, query) =>
  CompanyService.fetchSearch(query)
  |> Js.Promise.then_(
       (results) => {
         reduce((_) => SearchResultsLoaded(results), ());
         Js.Promise.resolve()
       }
     )
  |> ignore;

let make = (_children) => {
  ...component,
  initialState: fun () => (
    {companies: [], employees: [], selectedCompany: "", query: "", results: []}: componentState
  ),
  didMount: ({reduce}) => {
    loadCompanies(reduce);
    ReasonReact.NoUpdate
  },
  reducer: (action, state) =>
    switch action {
    | CompaniesLoaded(companies) => ReasonReact.Update({...state, companies})
    | EmployeesLoaded(employees, companyName) =>
      ReasonReact.Update({
        ...state,
        employees,
        selectedCompany: companyName,
        results: [],
        query: ""
      })
    | QueryUpdated(query) => ReasonReact.Update({...state, query})
    | SearchResultsLoaded(results) => ReasonReact.Update({...state, results})
    },
  render: ({state, reduce}) =>
    <div>
      <Header
        query=state.query
        onQueryUpdate=(
          (event) => {
            let query = ReactDOMRe.domElementToObj(ReactEventRe.Form.target(event))##value;
            updateQuery(reduce, query);
            executeQuery(reduce, query)
          }
        )
        onQueryExecute=((_) => executeQuery(reduce, state.query))
      />
      (
        state.query != "" ?
          <SearchResults results=state.results /> :
          <CompanyList
            companies=state.companies
            employees=state.employees
            selectedCompany=state.selectedCompany
            onSelectCompany=((name) => selectCompany(reduce, name))
          />
      )
    </div>
};