import { PagesRequest } from "../common/pages-request";

export interface AssignmentRequests  extends PagesRequest{
  company:        string,
  state:          string,
  date:           string,
  dateRangeInit:  string,
  dateRangeEnd:   string,
  typeDoc:        string,
  numberDoc:      string,
}