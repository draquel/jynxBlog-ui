import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  featured = [{
    title: 'Title of a longer featured blog post',
    tagline: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.',
    created: '',
    author: '',
    body: ''
  },
  {
    title: 'Featured post',
    tagline: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    created: 'November 12, 2020',
    author: '',
    body: ''
  },
  {
    title: 'Post title',
    tagline: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    created: 'November 11, 2020',
    author: '',
    body: ''
  }];

  posts = [{
    title: 'Sample blog post',
    created: 'January 1, 2021',
    author: 'Mark',
    body: '<p>This blog post shows a few different types of content that’s supported and styled with Bootstrap. Basic typography, lists, tables, images, code, and more are all supported as expected.</p>\n' +
      '        <hr>\n' +
      '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <h2>Blockquotes</h2>\n' +
      '        <p>This is an example blockquote in action:</p>\n' +
      '        <blockquote class="blockquote">\n' +
      '          <p>Quoted text goes here.</p>\n' +
      '        </blockquote>\n' +
      '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <h3>Example lists</h3>\n' +
      '        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout. This is an example unordered list:</p>\n' +
      '        <ul>\n' +
      '          <li>First list item</li>\n' +
      '          <li>Second list item with a longer description</li>\n' +
      '          <li>Third list item to close it out</li>\n' +
      '        </ul>\n' +
      '        <p>And this is an ordered list:</p>\n' +
      '        <ol>\n' +
      '          <li>First list item</li>\n' +
      '          <li>Second list item with a longer description</li>\n' +
      '          <li>Third list item to close it out</li>\n' +
      '        </ol>\n' +
      '        <p>And this is a definiton list:</p>\n' +
      '        <dl>\n' +
      '          <dt>HyperText Markup Language (HTML)</dt>\n' +
      '          <dd>The language used to describe and define the content of a Web page</dd>\n' +
      '          <dt>Cascading Style Sheets (CSS)</dt>\n' +
      '          <dd>Used to describe the appearance of Web content</dd>\n' +
      '          <dt>JavaScript (JS)</dt>\n' +
      '          <dd>The programming language used to build advanced Web sites and applications</dd>\n' +
      '        </dl>\n' +
      '        <h2>Inline HTML elements</h2>\n' +
      '        <p>HTML defines a long list of available inline tags, a complete list of which can be found on the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">Mozilla Developer Network</a>.</p>\n' +
      '        <ul>\n' +
      '          <li><strong>To bold text</strong>, use <code class="language-plaintext highlighter-rouge">&lt;strong&gt;</code>.</li>\n' +
      '          <li><em>To italicize text</em>, use <code class="language-plaintext highlighter-rouge">&lt;em&gt;</code>.</li>\n' +
      '          <li>Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use <code class="language-plaintext highlighter-rouge">&lt;abbr&gt;</code>, with an optional <code class="language-plaintext highlighter-rouge">title</code> attribute for the full phrase.</li>\n' +
      '          <li>Citations, like <cite>— Mark Otto</cite>, should use <code class="language-plaintext highlighter-rouge">&lt;cite&gt;</code>.</li>\n' +
      '          <li><del>Deleted</del> text should use <code class="language-plaintext highlighter-rouge">&lt;del&gt;</code> and <ins>inserted</ins> text should use <code class="language-plaintext highlighter-rouge">&lt;ins&gt;</code>.</li>\n' +
      '          <li>Superscript <sup>text</sup> uses <code class="language-plaintext highlighter-rouge">&lt;sup&gt;</code> and subscript <sub>text</sub> uses <code class="language-plaintext highlighter-rouge">&lt;sub&gt;</code>.</li>\n' +
      '        </ul>\n' +
      '        <p>Most of these elements are styled by browsers with few modifications on our part.</p>\n' +
      '        <h2>Heading</h2>\n' +
      '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <h3>Sub-heading</h3>\n' +
      '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <pre><code>Example code block</code></pre>\n' +
      '        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout.</p>'
    },
    {
    title: 'Post Title',
    created: 'December 23, 2020',
    author: 'Jacob',
    body: '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <blockquote>\n' +
      '          <p>Longer quote goes here, maybe with some <strong>emphasized text</strong> in the middle of it.</p>\n' +
      '        </blockquote>\n' +
      '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <h3>Example table</h3>\n' +
      '        <p>And don\'t forget about tables in these posts:</p>\n' +
      '        <table class="table">\n' +
      '          <thead>\n' +
      '          <tr>\n' +
      '            <th>Name</th>\n' +
      '            <th>Upvotes</th>\n' +
      '            <th>Downvotes</th>\n' +
      '          </tr>\n' +
      '          </thead>\n' +
      '          <tbody>\n' +
      '          <tr>\n' +
      '            <td>Alice</td>\n' +
      '            <td>10</td>\n' +
      '            <td>11</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Bob</td>\n' +
      '            <td>4</td>\n' +
      '            <td>3</td>\n' +
      '          </tr>\n' +
      '          <tr>\n' +
      '            <td>Charlie</td>\n' +
      '            <td>7</td>\n' +
      '            <td>9</td>\n' +
      '          </tr>\n' +
      '          </tbody>\n' +
      '          <tfoot>\n' +
      '          <tr>\n' +
      '            <td>Totals</td>\n' +
      '            <td>21</td>\n' +
      '            <td>23</td>\n' +
      '          </tr>\n' +
      '          </tfoot>\n' +
      '        </table>\n' +
      '\n' +
      '        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout.</p>\n' +
      '      </article>\n' +
      '\n' +
      '      <article class="blog-post">\n' +
      '        <h2 class="blog-post-title">New feature</h2>\n' +
      '        <p class="blog-post-meta">December 14, 2020 by <a href="#">Chris</a></p>\n' +
      '\n' +
      '        <p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <ul>\n' +
      '          <li>First list item</li>\n' +
      '          <li>Second list item with a longer description</li>\n' +
      '          <li>Third list item to close it out</li>\n' +
      '        </ul>\n' +
      '        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout.</p>\n' +
      '      </article>'
  },
  {
    title: 'New feature',
    created: 'December 14, 2020',
    author: 'Chris',
    body: '<p>This is some additional paragraph placeholder content. It has been written to fill the available space and show how a longer snippet of text affects the surrounding content. We\'ll repeat it often to keep the demonstration flowing, so be on the lookout for this exact same string of text.</p>\n' +
      '        <ul>\n' +
      '          <li>First list item</li>\n' +
      '          <li>Second list item with a longer description</li>\n' +
      '          <li>Third list item to close it out</li>\n' +
      '        </ul>\n' +
      '        <p>This is some additional paragraph placeholder content. It\'s a slightly shorter version of the other highly repetitive body text used throughout.</p>'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}