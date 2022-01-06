
import URLApi from "./elevania/URLApi";
import {xml2js, ApiResponse} from "./elevania/Plugin";

export default (server) => {
  xml2js(server)
  URLApi(server)
}