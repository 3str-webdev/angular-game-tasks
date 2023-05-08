export interface RequestParams<T> {
  onStart?: () => void;
  onFinish?: (data?: T) => void;
  onError?: () => void;
}
