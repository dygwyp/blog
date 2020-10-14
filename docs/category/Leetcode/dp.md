---
title: 120-三角形最小路径和-中等
date: 2020-08-28
sidebar: true
categories:
- Leetcode
tags:
- leetcode
- 动态规划

---

## 120-三角形最小路径和-中等


给定一个三角形，找出自顶向下的最小路径和。每一步只能移动到下一行中相邻的结点上。

相邻的结点 在这里指的是 下标 与 上一层结点下标 相同或者等于 上一层结点下标 + 1 的两个结点。  
例如，给定三角形：

[  
&emsp;&emsp;&nbsp;&nbsp;[2],  
&emsp;&ensp;&nbsp;&nbsp;[3,4],  
&nbsp;&nbsp;&nbsp;&emsp;[6,5,7],  
&emsp;&nbsp;&nbsp;[4,1,8,3]  
]  
自顶向下的最小路径和为 11（即，2 + 3 + 5 + 1 = 11）。

说明：

如果你可以只使用 O(n) 的额外空间（n 为三角形的总行数）来解决这个问题，那么你的算法会很加分。

来源：力扣（LeetCode）  
链接：[题目网址](https://leetcode-cn.com/problems/triangle)  
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

## 解题思路

### 分析

首先判断此题可以用动态规划求解。  
为什么？  
可以分析，当三角形高度从1增长到n时，每增加一层，该层每个位置的最小路径和只和上一层相关，
因此，只要求出每层中每个位置的最小路径和，就能逐步求出最高层最小路径和。这个思路符合动态规划的适用条件。  
画图举例：
<img :src="$withBase('/img/dp1.jpg')" alt="mixureSecure">

### 求解

设三角形每层数组为 $curLevel$，设每层最小路径和列表 $dp$。
$dp$ 初始化为triangle最底层一列数据。  
每层递推公式：
    $$ dp[i] = curLevel[i]+min(dp[i],dp[i+1])$$
算法步骤：
1. 利用一维数组记录每层每个位置的最小路径和，初始化 $dp = triangle[-1]$;
2. 从三角形倒数第二层开始遍历：  
&emsp;&emsp;&emsp;遍历该层每个位置：  
&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;对每个位置依据公式$dp[i] = curLevel[i]+min(dp[i],dp[i+1])$求出该位置最小路径和;
3. 返回 $dp[0]$

### 代码

```python
def minimumTotal(self, triangle: List[List[int]]) -> int:
    dp = triangle[-1]
    for i in range(len(triangle)-2,-1,-1):
        for j in range(i+1):
            dp[j] = triangle[i][j] + min(dp[j],dp[j+1])
    return dp[0]
```
### 算法分析
设 $n$ 为三角形行数。
1. 时间复杂度：$O(n^2)$
外层循环次数 $n-1$，内层的每次循环次数等于该层数组长度，合起来总计算次数：
$1+2+...+n-1=1/2*n*(n-1),n>1$
因此时间复杂度：$O(n^2)$
2. 空间复杂度：$O(n)$
利用了 $dp$ 数组，长度为$n$，故为$O(n)$

### 运行结果
<img :src="$withBase('/img/dp1-res1.png')" alt="mixureSecure">


### 空间优化
若允许原地修改，可省去额外数组$dp$。
```python
def minimumTotal(self, triangle: List[List[int]]) -> int:
    for i in range(len(triangle)-2,-1,-1):
        for j in range(i+1):
            triangle[i][j] += min(triangle[i+1][j],triangle[i+1][j+1])
    return triangle[0][0]
```
1. 时间复杂度：$O(n^2)$
2. 空间复杂度：$O(1)$

### 运行结果
<img :src="$withBase('/img/dp1-res2.png')" alt="mixureSecure">

试了很多次，实际运行结果的空间性能反而不如利用dp的结果。
有没有大神可以解释一下原因？