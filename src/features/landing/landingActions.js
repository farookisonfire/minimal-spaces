export const UNMOUNT_CANVAS = 'UNMOUNT_CANVAS';
export const MOUNT_CANVAS = 'MOUNT_CANVAS';

export function unmountCanvas() {
  return { type: UNMOUNT_CANVAS };
}

export function mountCanvas() {
  return { type: MOUNT_CANVAS};
}
