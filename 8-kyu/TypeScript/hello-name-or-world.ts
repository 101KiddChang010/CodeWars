export function hello(name = ''): string {
  return "Hello, " + (name ? `${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!` : "World!" );
}
