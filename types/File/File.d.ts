declare namespace BilibilWebMinigame {
    // ------------------------------ 核心枚举 & 通用类型 ------------------------------
    /**
     * 文件编码类型枚举（所有文件读写接口的 encoding 合法值）
     */
    type FileEncoding =
        | "ascii"
        | "base64"
        | "binary"
        | "hex"
        | "ucs2" | "ucs-2" | "utf16le" | "utf-16le" // 以小端序读取
        | "utf-8" | "utf8"
        | "latin1";

    /**
     * 文件操作错误回调通用结构
     */
    interface FileErrorResult {
        /** 错误信息（各方法有专属合法值） */
        errMsg: string;
    }

    /**
     * 文件 Stats 核心对象（stat 接口返回）
     * @description 修正文档笔误：lastModifiedTiem → lastModifiedTime
     */
    interface FileStats {
        /** 最后访问时间戳（秒，示例：1500000000.0000000） */
        lastAccessedTime: number;
        /** 最后修改时间戳（秒，示例：1500000000.0000000） */
        lastModifiedTime: number;
        /** 文件权限模式（示例："500"） */
        mode: string;
        /** 文件大小（字节，示例：196） */
        size: number;

        /**
         * 判断当前文件是否为目录
         * @returns true=是目录 / false=非目录
         */
        isDirectory: () => boolean;

        /**
         * 判断当前文件是否为普通文件
         * @returns true=是普通文件 / false=非普通文件
         */
        isFile: () => boolean;
    }

    /**
     * 已保存文件列表项（getSavedFileList 接口返回）
     */
    interface SavedFileItem {
        /** 文件本地路径 */
        filePath: string;
        /** 文件大小（字节） */
        size: number;
        /** 保存时间戳（从1970/01/01 08:00:00 到当前的秒数） */
        createTime: number;
    }

    // ------------------------------ 异步方法参数类型 ------------------------------
    /**
     * access - 判断文件/目录是否存在
     */
    interface FsAccessOptions {
        /** 要判断的文件/目录路径（必填） */
        path: string;
        /** 成功回调：文件/目录存在时触发 */
        success?: () => void;
        /** 失败回调：errMsg = "fail no such file or directory ${path}" */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调（成功/失败都执行） */
        complete?: () => void;
    }

    /**
     * appendFile - 在文件结尾追加内容
     */
    interface FsAppendFileOptions {
        /** 目标文件路径（必填） */
        filePath: string;
        /** 要追加的内容（文本/二进制，必填） */
        data: string | ArrayBuffer;
        /** 编码格式，默认 utf8 */
        encoding?: FileEncoding;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory, open ${filePath}（文件不存在）
         * - fail illegal operation on a directory, open "${filePath}"（路径是目录）
         * - fail permission denied, open ${dirPath}（无写权限）
         * - fail sdcard not mounted（SD卡未挂载）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * copyFile - 复制文件
     */
    interface FsCopyFileOptions {
        /** 源文件路径（必填，仅普通文件） */
        srcPath: string;
        /** 目标文件路径（必填） */
        destPath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, copyFile ${srcPath} -> ${destPath}（无写权限）
         * - fail no such file or directory, copyFile ${srcPath} -> ${destPath}（源文件/目标上层目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * getFileInfo - 获取本地临时/缓存文件信息
     */
    interface FsGetFileInfoOptions {
        /** 文件路径（必填） */
        filePath: string;
        /** 成功回调：返回文件大小（字节） */
        success?: (res: { size: number }) => void;
        /** 失败回调：errMsg = "fail file not exist"（文件不存在） */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * getSavedFileList - 获取已保存的本地缓存文件列表
     */
    interface FsGetSavedFileListOptions {
        /** 成功回调：返回已保存文件数组 */
        success?: (res: { fileList: SavedFileItem[] }) => void;
        /** 失败回调 */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * mkdir - 创建目录
     */
    interface FsMkdirOptions {
        /** 目录路径（必填） */
        dirPath: string;
        /** 是否递归创建上级目录，默认 false */
        recursive?: boolean;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory ${dirPath}（上级目录不存在）
         * - fail permission denied, open ${dirPath}（无写权限）
         * - fail file already exists ${dirPath}（同名文件/目录已存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * readFile - 读取本地文件内容
     */
    interface FsReadFileOptions {
        /** 文件路径（必填） */
        filePath: string;
        /** 编码格式，不传则返回 ArrayBuffer */
        encoding?: FileEncoding;
        /** 成功回调：返回文件内容（字符串/二进制） */
        success?: (res: { data: string | ArrayBuffer }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory, open ${filePath}（目录不存在）
         * - fail permission denied, open ${dirPath}（无读权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * readdir - 读取目录内文件列表
     */
    interface FsReaddirOptions {
        /** 目录路径（必填） */
        dirPath: string;
        /** 成功回调：返回目录下文件名数组 */
        success?: (res: { files: string[] }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory ${dirPath}（目录不存在）
         * - fail not a directory ${dirPath}（非目录）
         * - fail permission denied, open ${dirPath}（无读权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * rename - 重命名/移动文件/目录
     */
    interface FsRenameOptions {
        /** 源文件/目录路径（必填） */
        oldPath: string;
        /** 新文件/目录路径（必填） */
        newPath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, rename ${oldPath} -> ${newPath}（无写权限）
         * - fail no such file or directory, rename ${oldPath} -> ${newPath}（源文件/目标上层目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * removeSavedFile - 删除已保存的本地缓存文件
     */
    interface FsRemoveSavedFileOptions {
        /** 要删除的文件路径（必填） */
        filePath: string;
        /** 成功回调 */
        success?: () => void;
        /** 失败回调：errMsg = "fail file not exist"（文件不存在） */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * rmdir - 删除目录
     */
    interface FsRmdirOptions {
        /** 目录路径（必填） */
        dirPath: string;
        /** 是否递归删除目录，默认 false（基础库 2.3.0+ 支持） */
        recursive?: boolean;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory ${dirPath}（目录不存在）
         * - fail directory not empty（目录非空）
         * - fail permission denied, open ${dirPath}（无写权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * saveFile - 保存临时文件到本地（调用后临时文件不可用）
     */
    interface FsSaveFileOptions {
        /** 临时文件路径（必填） */
        tempFilePath: string;
        /** 目标存储路径（可选） */
        filePath?: string;
        /**
         * 成功回调：返回存储后的文件路径
         * @note 文档标注 savedFilePath 为 number，实际应为 string（笔误）
         */
        success?: (res: { savedFilePath: string | number }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail tempFilePath file not exist（临时文件不存在）
         * - fail permission denied, open "${filePath}"（无写权限）
         * - fail no such file or directory "${dirPath}"（上级目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * stat - 获取文件 Stats 对象
     */
    interface FsStatOptions {
        /** 文件/目录路径（必填） */
        path: string;
        /** 是否递归获取目录下文件的 Stats，默认 false */
        recursive?: boolean;
        /**
         * 成功回调：
         * - recursive=false → stats 为 FileStats 对象
         * - recursive=true → stats 为 { [relativePath: string]: FileStats }
         */
        success?: (res: {
            stats: FileStats | Record<string, FileStats>;
        }) => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, open [path]（无读权限）
         * - fail no such file or directory [path]（文件不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * unlink - 删除文件
     */
    interface FsUnlinkOptions {
        /** 要删除的文件路径（必填） */
        filePath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, open ${path}（无读权限）
         * - fail no such file or directory ${path}（文件不存在）
         * - fail operation not permitted, unlink ${filePath}（路径是目录）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * unzip - 解压文件
     */
    interface FsUnzipOptions {
        /** 源 zip 文件路径（必填） */
        zipFilePath: string;
        /** 目标目录路径（必填） */
        targetPath: string;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail permission denied, unzip ${zipFilePath} -> ${destPath}（无写权限）
         * - fail no such file or directory, unzip ${zipFilePath} -> "${destPath}（源文件/目标上层目录不存在）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    /**
     * writeFile - 写入文件内容（覆盖原有内容）
     */
    interface FsWriteFileOptions {
        /** 目标文件路径（必填） */
        filePath: string;
        /** 要写入的内容（文本/二进制，必填） */
        data: string | ArrayBuffer;
        /** 编码格式，默认 utf8 */
        encoding?: FileEncoding;
        /** 成功回调 */
        success?: () => void;
        /**
         * 失败回调（合法 errMsg）：
         * - fail no such file or directory, open ${filePath}（目录不存在）
         * - fail permission denied, open ${dirPath}（无写权限）
         */
        fail?: (res: FileErrorResult) => void;
        /** 完成回调 */
        complete?: () => void;
    }

    // ------------------------------ 文件管理器核心接口 ------------------------------
    /**
     * 文件管理器对象（全局唯一，由 bl.getFileSystemManager 获取）
     */
    interface FileSystemManager {
        // ------------------------------ 异步方法 ------------------------------
        /** 
         * 判断文件/目录是否存在
         * @example
         * const fs = bl.getFileSystemManager()
         * // 判断文件/目录是否存在
         * fs.access({
         *   path: `${bl.env.USER_DATA_PATH}/hello.txt`,
         *   success(res) {
         *     // 文件存在
         *     console.log(res)
         *   },
         *   fail(res) {
         *     // 文件不存在或其他错误
         *     console.error(res)
         *   }
         * })
         */
        access: (options: FsAccessOptions) => void;
        /** 在文件结尾追加内容 */
        appendFile: (options: FsAppendFileOptions) => void;
        /** 复制文件（仅普通文件） */
        copyFile: (options: FsCopyFileOptions) => void;
        /** 获取本地临时/缓存文件信息（返回文件大小） */
        getFileInfo: (options: FsGetFileInfoOptions) => void;
        /** 获取已保存的本地缓存文件列表 */
        getSavedFileList: (options: FsGetSavedFileListOptions) => void;
        /** 创建目录（支持递归创建上级目录） */
        mkdir: (options: FsMkdirOptions) => void;
        /** 读取文件内容（支持指定编码，默认二进制） */
        readFile: (options: FsReadFileOptions) => void;
        /** 读取目录内文件列表（返回文件名数组） */
        readdir: (options: FsReaddirOptions) => void;
        /** 重命名/移动文件/目录 */
        rename: (options: FsRenameOptions) => void;
        /** 删除已保存的本地缓存文件 */
        removeSavedFile: (options: FsRemoveSavedFileOptions) => void;
        /** 删除目录（支持递归删除） */
        rmdir: (options: FsRmdirOptions) => void;
        /** 保存临时文件到本地（调用后临时文件不可用） */
        saveFile: (options: FsSaveFileOptions) => void;
        /** 
         * 获取文件 Stats 对象（支持递归获取目录下所有文件 Stats）
         * @example recursive 为 false 时
         * const fs = bl.getFileSystemManager()
         * fs.stat({
         *   path: `${bl.env.USER_DATA_PATH}/testDir`,
         *   success: res => {
         *     console.log(res.stats.isDirectory())
         *   }
         * })
         * @example recursive 为 true 时
         * const fs = bl.getFileSystemManager()
         * fs.stat({
         *   path: `${bl.env.USER_DATA_PATH}/testDir`,
         *   recursive: true,
         *   success: res => {
         *     Object.keys(res.stats).forEach(path => {
         *       const stats = res.stats[path]
         *       console.log(path, stats.isDirectory())
         *     })
         *   }
         * })
         */
        stat: (options: FsStatOptions) => void;
        /** 删除文件（不可删除目录） */
        unlink: (options: FsUnlinkOptions) => void;
        /** 解压 zip 文件到指定目录 */
        unzip: (options: FsUnzipOptions) => void;
        /** 写入文件内容（覆盖原有内容） */
        writeFile: (options: FsWriteFileOptions) => void;

        // ------------------------------ 同步方法 ------------------------------
        /**
         * access 同步版本
         * @param path 文件/目录路径
         * @throws 错误信息：fail no such file or directory ${path}
         * @example
         * // 同步接口，未进入catch 则表示文件存在
         * try {
         *   fs.accessSync(`${bl.env.USER_DATA_PATH}/hello.txt`)
         * } catch(e) {
         *   console.error(e)
         * }
         */
        accessSync: (path: string) => void;

        /**
         * appendFile 同步版本
         * @param filePath 目标文件路径
         * @param data 要追加的内容
         * @param encoding 编码格式（默认 utf8）
         * @throws 文档指定的各类追加失败错误
         */
        appendFileSync: (
            filePath: string,
            data: string | ArrayBuffer,
            encoding?: FileEncoding
        ) => void;

        /**
         * copyFile 同步版本
         * @param srcPath 源文件路径（仅普通文件）
         * @param destPath 目标文件路径
         * @throws 权限不足/源文件不存在/目标上层目录不存在
         */
        copyFileSync: (srcPath: string, destPath: string) => void;

        /**
         * mkdir 同步版本
         * @param dirPath 目录路径
         * @param recursive 是否递归创建上级目录（默认 false）
         * @throws 上级目录不存在/无权限/同名文件已存在
         */
        mkdirSync: (dirPath: string, recursive?: boolean) => void;

        /**
         * readFile 同步版本
         * @param filePath 文件路径
         * @param encoding 编码格式（不传返回 ArrayBuffer）
         * @returns 文件内容（字符串/二进制）
         * @throws 目录不存在/无读权限
         */
        readFileSync: (
            filePath: string,
            encoding?: FileEncoding
        ) => string | ArrayBuffer;

        /**
         * readdir 同步版本
         * @param dirPath 目录路径
         * @returns 目录下文件名数组
         * @throws 目录不存在/非目录/无读权限
         */
        readdirSync: (dirPath: string) => string[];

        /**
         * rename 同步版本
         * @param oldPath 源路径
         * @param newPath 新路径
         * @throws 权限不足/源文件不存在/目标上层目录不存在
         */
        renameSync: (oldPath: string, newPath: string) => void;

        /**
         * rmdir 同步版本
         * @param dirPath 目录路径
         * @param recursive 是否递归删除（基础库 2.3.0+ 支持，默认 false）
         * @throws 目录不存在/非空/无权限
         */
        rmdirSync: (dirPath: string, recursive?: boolean) => void;

        /**
         * saveFile 同步版本
         * @param tempFilePath 临时文件路径
         * @param filePath 目标存储路径（可选）
         * @returns 存储后的文件路径（文档标注 number，实际为 string）
         * @throws 临时文件不存在/无权限/上级目录不存在
         */
        saveFileSync: (tempFilePath: string, filePath?: string) => string | number;

        /**
         * stat 同步版本
         * @param path 文件/目录路径
         * @param recursive 是否递归获取 Stats（默认 false）
         * @returns FileStats | Record<string, FileStats>
         * @throws 无读权限/文件不存在
         * @example recursive 为 false 时
         * const fs = bl.getFileSystemManager()
         * const stats = fs.statSync(
         *   `${bl.env.USER_DATA_PATH}/testDir`
         * );
         * console.log(res.isDirectory());
         * @example recursive 为 true 时
         * const fs = bl.getFileSystemManager()
         * const res = fs.statSync({
         *   `${bl.env.USER_DATA_PATH}/testDir`,
         *   true
         * );
         * Object.keys(res).forEach(path => {
         *   const stats = res[path];
         *   console.log(path, stats.isDirectory());
         * });
         */
        statSync: (
            path: string,
            recursive?: boolean
        ) => FileStats | Record<string, FileStats>;

        /**
         * unlink 同步版本
         * @param filePath 文件路径
         * @throws 无权限/文件不存在/路径是目录
         */
        unlinkSync: (filePath: string) => void;

        /**
         * writeFile 同步版本
         * @param filePath 目标文件路径
         * @param data 要写入的内容
         * @param encoding 编码格式（默认 utf8）
         * @throws 目录不存在/无写权限
         */
        writeFileSync: (
            filePath: string,
            data: string | ArrayBuffer,
            encoding?: FileEncoding
        ) => void;
    }

}