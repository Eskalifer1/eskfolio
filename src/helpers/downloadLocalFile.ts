/**
 * Downloads a file from the Next.js public directory with an optional custom filename
 *
 * @param {string} filePath - Path to the file in the public directory (e.g., 'documents/file.pdf')
 * @param {string} [customName] - Optional custom filename for the downloaded file
 * @returns {Promise<void>}
 * @throws {Error} If the file fails to download
 */
export const downloadLocalFile = async (
  filePath: string,
  customName?: string,
): Promise<void> => {
  const normalizedPath = filePath.startsWith("/") ? filePath : `/${filePath}`;
  const fileUrl = `${window.location.origin}${normalizedPath}`;

  const response = await fetch(fileUrl);
  if (!response.ok) {
    throw new Error(
      `Failed to fetch file: ${response.status} ${response.statusText}`,
    );
  }

  const blob = await response.blob();
  const link = document.createElement("a");
  const url = window.URL.createObjectURL(blob);

  link.href = url;
  link.download = customName || filePath.split("/").pop() || "download";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
};
