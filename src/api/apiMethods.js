import { API_URL } from "./endpoints";

export async function getStatusAssets() {
  const response = await fetch(`${API_URL}/api/rest-endpoint/get/status/`);
  if (response.ok) {
    return response.json();
  }
  return false;
}

export async function getRequestTypesAssets() {
  const response = await fetch(`${API_URL}/api/rest-endpoint/get/asset/types/`);
  if (response.ok) {
    return response.json();
  }
  return false;
}

export async function getActiveAssetsByUser(
  userId,
  selectedStatus,
  selectedRequestTypes,
  selectedSortValues
) {
  let url = `${API_URL}/api/rest-endpoint/get/assets/${userId}`;
  let statusCSVParam = null;
  let requestSelected = null;
  let sortValues = null;
  if (selectedStatus != null && selectedStatus.length > 0) {
    statusCSVParam = new URLSearchParams({
      statusIds: selectedStatus.join(","),
    });
  }
  if (selectedRequestTypes != null && selectedRequestTypes.length > 0) {
    requestSelected = new URLSearchParams({
      requestTypes: selectedRequestTypes.join(","),
    });
  }
  if (selectedSortValues != null && selectedSortValues.length > 0) {
    sortValues = new URLSearchParams({
        sort: selectedSortValues.join(","),
    });
  }
  if (requestSelected !== null || statusCSVParam !== null || selectedSortValues !== null) {
    url = `${url}?`;
    let urlAppended = false;
    if (requestSelected !== null) {
      url = url + requestSelected;
      urlAppended = true;
    }
    if (statusCSVParam !== null) {
      if (urlAppended) {
        url = `${url}&${statusCSVParam}`;
      } else {
        url = url + statusCSVParam;
      }
      urlAppended = true;
    }
    if (selectedSortValues !== null) {
        if (urlAppended) {
          url = `${url}&${sortValues}`;
        } else {
          url = url + sortValues;
        }
      }
  }
  const response = await fetch(url);
  if (response.ok) {
    const result = await response.json();
    return result;
  }
  return false;
}
