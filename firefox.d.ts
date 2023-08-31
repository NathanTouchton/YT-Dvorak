declare namespace browser {
    namespace runtime {
        function getURL(path: string): string;
        // Add other runtime functions you might use
    }
    namespace tabs {
        function executeScript(details: {
            file: string;
        }): Promise<void>;
        // Add other tabs functions you might use
    }
    // Add other browser namespaces you might use
}