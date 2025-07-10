## Designing a react component library at scale

Designing a **reusable React component library** for a **large-scale project** requires careful planning around **architecture, design consistency, scalability, and developer experience**.

## 🏗️ **1. Set the Foundation**

### 🔹 **Monorepo Setup (Optional but Ideal)**

- Use **Turborepo** or **Nx** to manage multiple packages (like UI components, utilities, themes).
- This allows independent versioning and easy code sharing.

### 🔹 **Folder Structure**

```
ui-library/
│
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   ├── Button.test.tsx
│   │   │   ├── Button.stories.tsx
│   │   │   └── index.ts
│   │   └── ...
│   ├── hooks/
│   ├── utils/
│   ├── theme/
│   └── index.ts
├── package.json
├── tsconfig.json
└── rollup.config.js / vite.config.js
```

---

## ⚛️ **2. Component Design Strategy**

### ✅ **Atomic Design Principles**

- Build from smallest units:

  - **Atoms**: Button, Input
  - **Molecules**: FormField, ModalHeader
  - **Organisms**: LoginForm, DashboardLayout

### ✅ **Props Design**

- Use `interface`/`type` with clear typing.
- Include `as` prop for polymorphic components.
- Support forwarding refs using `React.forwardRef`.

### ✅ **Accessibility**

- Use semantic HTML and ARIA attributes.
- Follow WCAG guidelines (e.g. `aria-label`, focus traps in modals).

---

## 🎨 **Theming and Styling**

### 🔸 Choose a Styling Approach:

- **CSS-in-JS (e.g., styled-components, Emotion)**
- **Tailwind CSS** (great for speed and consistency)
- **CSS Modules** if you prefer file-based styles

### 🔸 Theming Strategy

- Centralized `theme.ts` or `tailwind.config.js`
- Support **dark/light modes**, spacing, colors, typography
- Expose a `ThemeProvider`

---

## 📦 **Packaging & Tooling**

### ✅ **TypeScript**

- Ensure all components are fully typed
- Export types for consumers

### ✅ **Bundling**

Use **Rollup** or **Vite** to bundle:

- CommonJS + ESModules
- Peer dependencies externalized (e.g., `react`, `react-dom`)

### ✅ **Tree-Shaking**

- Ensure named exports
- Avoid default exports unless necessary

```js
// rollup.config.js
external: ["react", "react-dom"],
```

---

## 📚 **Documentation & Storybook**

### ✅ Use Storybook

- Document each component visually
- Show use cases, variations, and edge cases

### ✅ Include Docs

- `README.md` for each component
- Provide usage, props table, and examples

---

## 🧪 **Testing Strategy**

- Use **React Testing Library** + **Jest**
- Cover:

  - Rendering
  - Props behavior
  - Accessibility

- Optionally add **visual regression testing** with Storybook + Chromatic

---

## 🔄 **Versioning & Publishing**

### ✅ Version Control

- Use Git with clear PR conventions
- Optionally integrate **Changesets** for versioning

### ✅ Publishing

- Publish to **npm**, GitHub Packages, or a private registry
- Automate releases with GitHub Actions

---

## 🧰 **Dev Experience**

- Autocomplete: Export types in `index.ts`
- Linting: ESLint + Prettier
- Git hooks (e.g. `lint-staged`, `husky`)
- Aliases via `tsconfig.paths`

---

## ✅ Best Practices Summary

| Practice               | Description                                        |
| ---------------------- | -------------------------------------------------- |
| 🧱 Component Isolation | Components should not rely on app-level context    |
| 🎨 Design Tokens       | Use theme tokens instead of hardcoded styles       |
| 🔌 Pluggability        | Allow slot-based or prop-based overrides           |
| 📦 Independent Build   | Library should work outside the main app           |
| ♿ Accessible          | All components should meet accessibility standards |

---

## 🚀 Bonus: Ready-Made Tools

If you're looking for speed and power:

- Use [Storybook + Vite](https://storybook.js.org/blog/storybook-for-vite/)
- Use [shadcn/ui](https://ui.shadcn.com/) for inspiration or wrapper
- Use [Bit](https://bit.dev/) to publish and share components individually

## architect a scalable and performant dashboard UI with complex data handling.

Great question! This is a common **frontend system design** interview scenario that tests your ability to architect a scalable and performant dashboard UI with complex data handling.

---

## ✅ How to Structure Your Answer

Use the **FAIR framework**:
**F**unctional Requirements →
**A**rchitecture →
**I**nteractions →
**R**efinements (optimizations & tradeoffs)

---

## 🧩 1. Functional Requirements

> "We need to design a dashboard UI for analytics data that supports:"

- Data visualization via charts
- Filtering (e.g. by date, category, status)
- Pagination of large datasets
- Efficient API usage
- State sync across filters, pagination, and charts
- SSR or CSR decision depending on UX & SEO needs

---

## 🏛️ 2. Architecture & Rendering Strategy

### ✅ Choose: **Client-Side Rendering (CSR)**

**Reason**:

- Analytics dashboards are usually behind authentication.
- Data is **dynamic and user-specific**, so SEO is not critical.
- Filters and pagination make **interactivity** key — CSR reduces server load.

> "We'll use **CSR with React** (or Next.js App Router with `use client`) to ensure rich interactivity and flexibility on the client side."

---

## ⚙️ 3. Component Design & State Management

### 🎯 Component Hierarchy

```
<DashboardPage>
  <FilterBar />
  <ChartsPanel />
  <PaginatedTable />
</DashboardPage>
```

### 📦 State Management Strategy

Use **React Context / Zustand / Redux Toolkit** to manage shared dashboard state:

```ts
{
  filters: { dateRange, category },
  pagination: { page, pageSize },
  data: [],
  loading: false,
  error: null
}
```

- Shared state = filters & pagination
- Derived state (e.g. chart summaries) computed from API
- Avoid prop drilling

---

## 🌐 4. Efficient API Request Handling

### ✅ Debounce + Cancel Previous Requests

- Use a custom hook like `useDebouncedEffect`
- Cancel stale requests using `AbortController` or Axios cancel tokens

```tsx
useEffect(() => {
  const controller = new AbortController();
  fetchData(filters, pagination, controller.signal);

  return () => controller.abort(); // cancel on cleanup
}, [filters, pagination]);
```

---

### ✅ Cache + Reuse Results (Optional)

- Use **SWR**, **React Query**, or a global cache strategy
- Paginated & filtered data can be cached with keys like:

  ```ts
  ["analyticsData", filters, pagination];
  ```

---

## 📊 5. Charts and Pagination Sync

- On filter/pagination change, update both:

  - Table data
  - Charts (summary or aggregate)

- Charts use **aggregated version** of the same filtered data

### ✅ Synchronization Strategy

```ts
// One API call:
GET /analytics?start=...&end=...&category=...&page=...

// Response:
{
  data: [...],
  chartData: {...},
  pagination: { totalItems, currentPage }
}
```

Keep API response **normalized** and pass it to both `ChartsPanel` and `PaginatedTable`.

---

## 🧪 6. UX Enhancements & Optimizations

| Feature            | Strategy                                  |
| ------------------ | ----------------------------------------- |
| Loading States     | Use skeletons, spinners                   |
| URL Sync           | Sync filters & pagination to query params |
| Lazy Chart Loading | Load heavy charts after initial render    |
| Responsive UI      | Use Grid or Flexbox + media queries       |

---

## 🔁 7. SSR vs CSR Recap

| Strategy                        | Use If                                                                                |
| ------------------------------- | ------------------------------------------------------------------------------------- |
| **CSR** (Client-Side Rendering) | - Dashboard behind login<br>- Frequent user interaction<br>- Data changes dynamically |
| **SSR** (Server-Side Rendering) | - SEO needed<br>- Public data dashboard (e.g., marketing)                             |

---

## 📝 Final Summary Template (For Interview)

> "For this dashboard, I'd use **CSR** since it's interactive and behind login. I'd manage filters, pagination, and data state globally using Zustand or Context. I'd debounce filter inputs and cancel stale API requests to ensure performance. API responses would return both paginated data and chart summaries, which are used to sync `ChartsPanel` and `PaginatedTable`. Finally, I'd optimize user experience with loading states, responsive layout, and URL query sync for shareable views."

---

Would you like me to turn this into a 1-pager interview cheat sheet or sample code structure?

## File Systems Design

To answer a **System Design interview question** like **"Design a File Directory System"**, structure your answer clearly and cover both **high-level architecture** and **detailed components** like APIs, storage, scalability, and performance.

---

## 🎯 Sample Question:

> “Design a file directory system like Dropbox or Google Drive, where users can create folders, upload/download files, and share them.”

---

## ✅ Step-by-Step Answer Framework

---

### 1. 🎯 **Clarify Requirements**

#### Functional:

- Users can:

  - Create folders & subfolders
  - Upload/download files
  - Rename, delete, move files
  - Share via links (optional)
  - See hierarchy like `/docs/2025/report.pdf`

#### Non-Functional:

- Scalable to millions of users
- Fast file access (low latency)
- Handle large files (e.g., 1GB+)
- High availability and durability

Ask:

> “Do we need real-time collaboration, sharing permissions, or just a personal file system?”

---

### 2. 🏗️ **High-Level Architecture**

```
[Client]
   |
[API Gateway / BFF]
   |
[App Servers]  <--> [Auth Service]
   |
[Directory Metadata DB]       [Object Store (S3/Blob)]
        |                              |
 [Folders, files, hierarchy]     [Actual binary file data]
```

---

### 3. 📦 **Key Components**

#### A. **Frontend**

- File tree component
- Upload button, drag/drop
- Pagination / lazy loading

#### B. **Backend APIs**

Use REST/GraphQL or gRPC for APIs:

- `POST /folders` → Create folder
- `POST /files` → Upload file (with metadata)
- `GET /folders/:id` → Get children (for tree)
- `GET /files/:id/download` → Signed URL to download
- `PUT /files/:id` → Rename/move
- `DELETE /files/:id`

> "We can split metadata and binary storage — file paths, owners, and names live in DB; content in Object Store."

#### C. **Metadata DB Schema (e.g., Postgres, DynamoDB)**

```sql
Files Table:
- id (UUID)
- name
- parent_folder_id
- owner_id
- size
- mime_type
- object_key (points to S3 or GCS)
- created_at

Folders Table:
- id
- name
- parent_folder_id
- owner_id
```

---

### 4. ⚙️ **Scalability**

#### A. Metadata Layer:

- Use **PostgreSQL** for relational structure or **DynamoDB** for massive scale
- Add **indexes on parent_folder_id + owner_id** for fast folder browsing

#### B. File Storage:

- Store files in **cloud object storage** (Amazon S3 / GCS / Azure Blob)
- Generate **presigned URLs** for uploads/downloads (bypasses backend load)

#### C. Directory Structure:

- Support paths like Unix: `/userId/docs/2025/notes.pdf`
- Use **Materialized Paths** or **Nested Sets** for fast hierarchy traversal

---

### 5. 🚀 **Performance Optimizations**

| Challenge                | Optimization Strategy                          |
| ------------------------ | ---------------------------------------------- |
| Browsing folders         | Index by `parent_folder_id`, paginate children |
| File upload latency      | Use presigned URL + direct upload to S3        |
| Large number of files    | Paginate, lazy load, infinite scroll UI        |
| Frequent access to files | Cache metadata (Redis), CDN for file delivery  |
| Searching files          | Index file names/metadata using ElasticSearch  |

---

### 6. 🔐 **Security & Access Control**

- JWT or OAuth-based auth
- Each file/folder has `owner_id`
- Signed URLs for access to object storage
- Add ACL or RBAC if sharing is required

---

### 7. 🧪 **APIs Example Contract (for Upload)**

#### **Request**

```http
POST /files
Authorization: Bearer <token>
{
  "name": "report.pdf",
  "parentFolderId": "abc123",
  "mimeType": "application/pdf"
}
```

#### **Response**

```json
{
  "fileId": "xyz456",
  "uploadUrl": "https://s3.aws.com/bucket/key?signature=...",
  "objectKey": "users/123/report.pdf"
}
```

> Frontend uploads file directly to `uploadUrl`, then confirms with backend.

---

### 8. 🧠 **Tradeoffs & Discussion**

| Area             | Option A                      | Option B                         |
| ---------------- | ----------------------------- | -------------------------------- |
| Storage          | S3 (cheap, scalable)          | Local disk (fast, less scalable) |
| Metadata DB      | SQL (ACID, relations)         | NoSQL (scale, needs care)        |
| Folder Tree      | Materialized Path (fast read) | Adjacency list (simpler, slower) |
| Real-time update | WebSocket                     | Polling                          |

---

### 9. 🧾 **Wrap-up Summary**

> “To design a scalable file directory system, I’d use a hybrid approach — store metadata (name, hierarchy) in Postgres or Dynamo, and binary data in cloud object storage like S3. I’d expose REST APIs with signed URLs to handle uploads/downloads securely and efficiently. I’d support nested folders using materialized paths and paginate for large folders. To scale, I’d use Redis for caching, and S3 + CDN for performance. Auth and access control would be enforced at the API layer using JWT and user-scoped queries.”

---

Let me know if you'd like:

- A system diagram
- Sample API documentation
- Full architecture in Markdown or Mermaid
- A React-based file explorer frontend scaffold
