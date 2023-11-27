import { PagesRequest } from "../common/pages-request";

export interface AssignmentMaintainerRequests  extends PagesRequest{
  company:        string,
  state:          string,
  typeDoc:        string,
  numberDoc:      string,
}