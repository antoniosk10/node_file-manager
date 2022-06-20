# Node.js File Manager

The program is started by npm-script start in following way:

```bash
npm run start -- --username=your_username
```

List of operations and their syntax:

- Navigation & working directory (nwd)
  - Go upper from current directory (when you are in the root folder this operation shouldn't change working directory)
  ```bash
  up
  ```
  - Go to dedicated folder from current directory (`path_to_directory` can be relative or absolute)
  ```bash
  cd path_to_directory
  ```
  - List all files and folder in current directory and print it to console
  ```bash
  ls
  ```
- Basic operations with files

  - Read file and print it's content in console:

  ```bash
  cat path_to_file
  ```

  - Create empty file in current working directory:

  ```bash
  add new_file_name
  ```

  - Rename file:

  ```bash
  rn path_to_file new_filename
  ```

  ```
  Example: rn user/file.txt newFile.txt
  ```

  - Copy file:

  ```bash
  cp path_to_file path_to_new_directory
  ```

  ```
  Example: cp user/file.txt documents/
  ```

  - Move file (same as copy but initial file is deleted):

  ```bash
  mv path_to_file path_to_new_directory
  ```

  ```
  Example: mv user/file.txt documents/
  ```

  - Delete file:

  ```bash
  rm path_to_file
  ```

- Operating system info (prints following information in console)
  - Get EOL (default system End-Of-Line)
  ```bash
  os --EOL
  ```
  - Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them)
  ```bash
  os --cpus
  ```
  - Get home directory:
  ```bash
  os --homedir
  ```
  - Get current _system user name_ (Do not confuse with the username that is set when the application starts)
  ```bash
  os --username
  ```
  - Get CPU architecture for which Node.js binary has compiled
  ```bash
  os --architecture
  ```
- Hash calculation
  - Calculate hash for file and print it into console
  ```bash
  hash path_to_file
  ```
- Compress and decompress operations

  - Compress file (using Brotli algorytm)

  ```bash
  compress path_to_file path_to_destination
  ```

  Examples:

  ```
  compress file.txt /
  result: created file.txt.br in the same directory as source
  ```

  ```
  compress file.txt newFile.br
  result: created newFile.br in the same directory as source
  ```

  - Decompress file (using Brotli algorytm)

  ```bash
  decompress path_to_file path_to_destination
  ```

  Examples:

  ```
  decompress file.txt.br /
  result: created file.txt in the same directory as source
  ```

  ```
  decompress file.txt.br newFile.txt
  result: created newFile.txt in the same directory as source
  ```

  ```
  decompress file.txt documents/
  result: created documents/file.txt
  ```
