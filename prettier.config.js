module.exports = {
    plugins: [
        require("prettier-plugin-tailwindcss"),
        require("@trivago/prettier-plugin-sort-imports"),
    ],
    importOrder: [
        "^@/components/(.*)$",
        "^@/config/(.*)$",
        "^@/hooks/(.*)$",
        "^@/model/(.*)$",
        "^@/pages/(.*)$",
        "^@/screens/(.*)$",
        "^[./]",
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    tabWidth: 4,
};
