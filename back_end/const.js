/**
 * -----------------status code
 * 
 * 2xx => success
 * -- 200 (OK): get data success
 * -- 201 (CREATED): create data success
 * -- 204: mo content
 * 
 * 4xx => err from user
 * -- 400 (BAB REQUEST)
 * -- 401 (UNAUTHORIZED)
 * -- 404 (NOT FOUND)
 * -- 403 (FORBIDEN)
 * 
 * 5xx => err from server
 * -- 500 (INTERNAL SERVER)
 * -- 502 (BAD GATEWAY)
 * 
 */


export const OK = 200;
export const INTERNAL_SERVER = 500;