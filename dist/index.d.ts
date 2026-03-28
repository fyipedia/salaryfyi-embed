/**
 * salaryfyi-embed — TypeScript declarations
 */
export {};
declare global {
  interface HTMLElement {
    dataset: DOMStringMap & {
      'salaryfyi'?: 'entity' | 'compare' | 'glossary' | 'guide' | 'search' | 'faq' | 'salary-compare';
      slug?: string;
      theme?: 'light' | 'dark' | 'sepia' | 'auto';
      styleVariant?: 'modern' | 'clean';
      size?: 'default' | 'compact' | 'large';
      placeholder?: string;
    };
  }
}
