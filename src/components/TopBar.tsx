import { Form, FormControl, Navbar, Button } from "react-bootstrap";

interface SearchType {
  setSearch: (search: string) => void;
  search: string;
  fetchSongs: (search: string) => void;
}

function TopBar({setSearch, search , fetchSongs} : SearchType) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Song Search Engine</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-end">
        <div className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={(e) => setSearch(e.target.value)}/>
          <Button variant="success" onClick={() => fetchSongs(search)}>Search</Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}


export default TopBar;