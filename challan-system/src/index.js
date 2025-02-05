Microsoft Windows [Version 10.0.22631.4317]
(c) Microsoft Corporation. All rights reserved.

E:\KEC2024>git init
Initialized empty Git repository in E:/KEC2024/.git/

E:\KEC2024>dir /a
 Volume in drive E is New Volume
 Volume Serial Number is AE29-7447

 Directory of E:\KEC2024

12/27/2024  12:01 PM    <DIR>          .
12/27/2024  11:55 AM    <DIR>          ..
12/27/2024  12:01 PM    <DIR>          .git
12/27/2024  11:58 AM               266 index.html
               1 File(s)            266 bytes
               3 Dir(s)  297,386,553,344 bytes free

E:\KEC2024>git add index.html

E:\KEC2024>git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
user.name=ROHITH-Bsuresh
user.email=rohithrosi1012@gmail.com
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true

E:\KEC2024>git commit -m
error: switch `m' requires a value

E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

E:\KEC2024>git log
commit 30578969cb7a82d19bcf77ec0ae5835b44cf25ef (HEAD -> master)
Author: ROHITH-Bsuresh <rohithrosi1012@gmail.com>
Date:   Fri Dec 27 12:18:21 2024 +0530

    Adding index.html

E:\KEC2024>







E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

E:\KEC2024>git log
commit 30578969cb7a82d19bcf77ec0ae5835b44cf25ef (HEAD -> master)
Author: ROHITH-Bsuresh <rohithrosi1012@gmail.com>
Date:   Fri Dec 27 12:18:21 2024 +0530

    Adding index.html

E:\KEC2024>





E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

E:\KEC2024>git log
commit 30578969cb7a82d19bcf77ec0ae5835b44cf25ef (HEAD -> master)
Author: ROHITH-Bsuresh <rohithrosi1012@gmail.com>
Date:   Fri Dec 27 12:18:21 2024 +0530

    Adding index.html


E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

E:\KEC2024>git log
commit 30578969cb7a82d19bcf77ec0ae5835b44cf25ef (HEAD -> master)

E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)

E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html

E:\KEC2024>git commit -m "Adding index.html"



E:\KEC2024>git commit -m "Adding index.html"
[master (root-commit) 3057896] Adding index.html
 1 file changed, 11 insertions(+)
 create mode 100644 index.html

E:\KEC2024>git log
commit 30578969cb7a82d19bcf77ec0ae5835b44cf25ef (HEAD -> master)
Author: ROHITH-Bsuresh <rohithrosi1012@gmail.com>
Date:   Fri Dec 27 12:18:21 2024 +0530

    Adding index.html

E:\KEC2024>git config user.name
ROHITH-Bsuresh

E:\KEC2024>git config user.email
rohithrosi1012@gmail.com

E:\KEC2024>git config user.email "rohithrosi1012@gmail.com"

E:\KEC2024>git remote add orign git config --list                
error: unknown option `list'
usage: git remote add [<options>] <name> <url>

    -f, --[no-]fetch      fetch the remote branches
    --[no-]tags           import all tags and associated objects when fetching
                          or do not fetch any tag at all (--no-tags)
    -t, --[no-]track <branch>
                          branch(es) to track
    -m, --[no-]master <branch>
                          master branch
    --[no-]mirror[=(push|fetch)]
                          set up remote as a mirror to push to or fetch from


E:\KEC2024>git config --list
diff.astextplain.textconv=astextplain
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
http.sslbackend=openssl
http.sslcainfo=C:/Program Files/Git/mingw64/etc/ssl/certs/ca-bundle.crt
core.autocrlf=true
core.fscache=true
core.symlinks=false
pull.rebase=false
credential.helper=manager
credential.https://dev.azure.com.usehttppath=true
init.defaultbranch=master
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
filter.lfs.clean=git-lfs clean -- %f
user.name=ROHITH-Bsuresh
user.email=rohithrosi1012@gmail.com
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.symlinks=false
core.ignorecase=true
user.email=rohithrosi1012@gmail.com

E:\KEC2024>git branch
* master

E:\KEC2024>git status
On branch master
nothing to commit, working tree clean

E:\KEC2024>git remote add orgin https://github.com/ROHITH-Bsuresh/KEC-2024.git

E:\KEC2024>git push orgin master
info: please complete authentication in your browser...
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 419 bytes | 419.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
To https://github.com/ROHITH-Bsuresh/KEC-2024.git
 * [new branch]      master -> master

E:\KEC2024>git commit -m "hello"                                                                                                                                                   
On branch master                                                                                                                                                                   
Changes not staged for commit:                                                                                                                                                     
  (use "git add <file>..." to update what will be committed)                                                                                                                       
  (use "git restore <file>..." to discard changes in working directory)                                                                                                                    modified:   index.html                                                                                                                                                                                                                                                                                                                                        
no changes added to commit (use "git add" and/or "git commit -a")                                                                                                                  
                                                                                                                                                                                   
E:\KEC2024>git add .                                                                                                                                                               
                                                                                                                                                                                   
E:\KEC2024>git commit -m "hello"                                                                                                                                                   
[master 29fd169] hello     
 1 file changed, 1 insertion(+)

E:\KEC2024>git remote add orgin https://github.com/ROHITH-Bsuresh/KEC-2024.git
error: remote orgin already exists.

E:\KEC2024>git push orgin master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 16 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 308 bytes | 308.00 KiB/s, done.
Total 3 (delta 1), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (1/1), completed with 1 local object.
To https://github.com/ROHITH-Bsuresh/KEC-2024.git
   3057896..29fd169  master -> master

E:\KEC2024>^A